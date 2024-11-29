interface ContractTemplate {
  id: string;
  name: string;
  category: string;
  description: string;
  code: string;
  rating: number;
  audited: boolean;
  author: string;
}

export class TemplateManager {
  private templates: ContractTemplate[] = [];

  addTemplate(template: ContractTemplate): void {
    this.templates.push(template);
  }

  getTemplatesByCategory(category: string): ContractTemplate[] {
    return this.templates.filter(t => t.category === category);
  }

  getAuditedTemplates(): ContractTemplate[] {
    return this.templates.filter(t => t.audited);
  }

  searchTemplates(query: string): ContractTemplate[] {
    const lowercaseQuery = query.toLowerCase();
    return this.templates.filter(t => 
      t.name.toLowerCase().includes(lowercaseQuery) ||
      t.description.toLowerCase().includes(lowercaseQuery)
    );
  }
}