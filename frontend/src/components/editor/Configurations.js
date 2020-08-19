const colors =  [
    {
      color: 'hsl(0, 0%, 0%)',
      label: 'Siyah'
    },
    {
      color: 'hsl(0, 0%, 30%)',
      label: 'Koyu gri'
    },
    {
      color: 'hsl(0, 0%, 60%)',
      label: 'Gri'
    },
    {
      color: 'hsl(0, 0%, 90%)',
      label: 'Açık gri'
    },
    {
      color: 'hsl(0, 0%, 100%)',
      label: 'Beyaz',
      hasBorder: true
    },
    {
      color: 'hsl(0, 75%, 60%)',
      label: 'Kırmızı'
    },
    {
      color: 'hsl(30, 75%, 60%)',
      label: 'Turuncu'
    },
    {
      color: 'hsl(60, 75%, 60%)',
      label: 'Sarı'
    },
    {
      color: 'hsl(90, 75%, 60%)',
      label: 'Açık yeşil'
    },
    {
      color: 'hsl(120, 75%, 60%)',
      label: 'Yeşil'
    },
    {
      color: 'hsl(150, 75%, 60%)',
      label: 'Akuamarin'
    },
    {
      color: 'hsl(180, 75%, 60%)',
      label: 'Turkuaz'
    },
    {
      color: 'hsl(210, 75%, 60%)',
      label: 'Açık mavi'
    },
    {
      color: 'hsl(240, 75%, 60%)',
      label: 'Mavi'
    },
    {
      color: 'hsl(270, 75%, 60%)',
      label: 'Mor'
    }
  ]


export const configurations = 
    {
        fontColor: {
          columns: 3,
          colors
        },
        fontBackgroundColor: {
          columns: 3,
          colors
        },
        fontSize: {
          options: [
            { title: "Çok Küçük", model: "0.5rem" },
            { title: "Küçük", model: "0.75rem" },
            { title: "Normal", model: "1rem" },
            { title: "Büyük", model: "1.25rem" },
            { title: "Çok Büyük", model: "1.5rem" },
          ],
        },
        heading: {
          options: [
            {
              model: "paragraph",
              title: "Paragraf",
              class: "ck-heading_paragraph",
            },
            {
              model: "heading1",
              view: "h1",
              title: "Başlık 1",
              class: "ck-heading_heading1",
            },
            {
              model: "heading2",
              view: "h2",
              title: "Başlık 2",
              class: "ck-heading_heading2",
            },
            {
              model: "heading3",
              view: "h3",
              title: "Başlık 3",
              class: "ck-heading_heading3",
            },
          ],
        },
      }
