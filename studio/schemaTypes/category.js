export default {
  name: 'category',
  title: 'Categorias do Blog',
  type: 'document',
  fields: [
    { name: 'title', title: 'Nome da Categoria', type: 'string', description: 'Ex: BIM, Estruturas, Sustentabilidade' },
    { name: 'slug', title: 'ID de Filtro (Slug)', type: 'slug', options: { source: 'title', maxLength: 96 } },
  ]
}
