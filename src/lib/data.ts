export interface Testimonial {
  id: number;
  avatar: string;
  testimonial_name: string;
  content_text: string;
  text_block: string;
}
export const testimonials: Testimonial[] = [
  // {
  //   id: 1,
  //   avatar:
  //     "https://res.cloudinary.com/dvf2uvb8a/image/upload/f_auto,q_auto/v1/bento-portfolio/testimonials/gyvzpesfavb61ow7f6ja",
  //   testimonial_name: "Maria Luisa",
  //   content_text:
  //     "No es porque sea mi hijo, pero no es un desarrollador cualquiera, sus habilidades van más allá de lo ordinario. Cada código que escribe tiene un toque de innovación.",
  //   text_block: "Madre de Martin",
  // },
  {
    id: 1,
    avatar:
      "https://res.cloudinary.com/dvf2uvb8a/image/upload/f_auto,q_auto/v1/bento-portfolio/testimonials/lp4kocykuyl6tnf3bwvp",
    testimonial_name: "Camila Lopez",
    content_text:
      "Martin siempre fue nuestro as bajo la manga. En cada proyecto, brilla con una chispa única. Aporta una frescura creativa que simplemente no tiene precio.",
    text_block: "Kinesiologa, hermana de Martin",
  },
  {
    id: 2,
    avatar:
      "https://res.cloudinary.com/dvf2uvb8a/image/upload/ar_1:1,c_crop,g_face/bento-portfolio/testimonials/ztovhcqmatppcpirwhv3.jpg",
    testimonial_name: "Máximo Wiersma",
    content_text:
      "Compartir con Martin va más allá del código. No solo es un genio del desarrollo, sino también una persona intuitiva y colaboradora.",
    text_block: "Mejor amigo de Martin",
  },
];
