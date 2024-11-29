import { sql } from '@vercel/postgres';
import { z } from 'zod';

export const db = {
  async createUser({ email, passwordHash }: { email: string; passwordHash: string }) {
    const result = await sql`
      INSERT INTO users (email, password_hash)
      VALUES (${email}, ${passwordHash})
      RETURNING id, email, created_at;
    `;
    return result.rows[0];
  },

  async getUserByEmail(email: string) {
    const result = await sql`
      SELECT * FROM users WHERE email = ${email};
    `;
    return result.rows[0];
  },

  async createContract({ userId, name, code, network }: {
    userId: number;
    name: string;
    code: string;
    network: string;
  }) {
    const result = await sql`
      INSERT INTO contracts (user_id, name, code, network, status)
      VALUES (${userId}, ${name}, ${code}, ${network}, 'draft')
      RETURNING *;
    `;
    return result.rows[0];
  },

  async getContractsByUserId(userId: number) {
    const result = await sql`
      SELECT * FROM contracts WHERE user_id = ${userId}
      ORDER BY created_at DESC;
    `;
    return result.rows;
  },

  async createAudit({ contractId }: { contractId: number }) {
    const result = await sql`
      INSERT INTO audits (contract_id, status)
      VALUES (${contractId}, 'pending')
      RETURNING *;
    `;
    return result.rows[0];
  },

  async updateAuditReport({ auditId, report }: { auditId: number; report: string }) {
    const result = await sql`
      UPDATE audits
      SET status = 'completed', report = ${report}
      WHERE id = ${auditId}
      RETURNING *;
    `;
    return result.rows[0];
  },
};