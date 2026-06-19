export default {
  name: 'post',
  title: 'Artigos do Blog',
  type: 'document',
  fields: [
    { name: 'title', title: 'Título do Artigo', type: 'string' },
    { name: 'slug', title: 'URL do Artigo (Slug)', type: 'slug', options: { source: 'title', maxLength: 96 } },
    { 
      name: 'mainImage', 
      title: 'Imagem de Destaque', 
      type: 'image', 
      options: { hotspot: true },
      fields: [{ name: 'alt', title: 'Texto Alternativo', type: 'string' }]
    },
    { 
      name: 'categories', 
      title: 'Categorias', 
      type: 'array', 
      of: [{ type: 'reference', to: { type: 'category' } }],
      description: 'Selecione as categorias para este artigo (alimentará os filtros do site)'
    },
    { name: 'publishedAt', title: 'Data de Publicação', type: 'datetime' },
    { name: 'readingTime', title: 'Tempo de Leitura (minutos)', type: 'number', description: 'Apenas o número, ex: 5' },
    { name: 'excerpt', title: 'Resumo do Card', type: 'text', description: 'Texto curto que aparece na listagem do blog' },
    {
      name: 'body',
      title: 'Conteúdo do Artigo (Recheio)',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Título 2', value: 'h2' },
            { title: 'Título 3', value: 'h3' },
            { title: 'Citação', value: 'blockquote' }
          ],
          lists: [{ title: 'Bullet', value: 'bullet' }, { title: 'Número', value: 'number' }]
        },
        { type: 'image', options: { hotspot: true } }
      ]
    }
  ],
  preview: {
    select: { title: 'title', media: 'mainImage' }
  }
}
