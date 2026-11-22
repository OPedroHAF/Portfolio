export const projects = [
  {
    slug: 'valorant-friends',
    title: 'How to NOT play Valorant with your friends',
    description:
      'A casual gaming project where friends explore funny and chaotic Valorant moments. Fully edited using CapCut software. Raw material of 44 minutes.',
    youtubeVideoId: '2bhWzCuyNWU',
    status: 'Finished',
    translations: {
      pt: {
        title: 'Como NÃO jogar Valorant com seus amigos',
        description:
          'Um projeto casual de gameplay em que amigos compartilham momentos engraçados e caóticos no Valorant. O vídeo foi editado no CapCut a partir de 44 minutos de gravação.',
        status: 'Concluído'
      }
    }
  },
  {
    slug: 'cuida-plus',
    title: 'Cuida+',
    description:
      'A university project focused on creating a practical and user-centered care solution.',
    repositoryUrl: '',
    status: 'WORK IN PROGRESS',
    translations: {
      pt: {
        title: 'Cuida+',
        description:
          'Projeto universitário focado na criação de uma solução de cuidado prática e centrada nas necessidades dos usuários.',
        status: 'EM DESENVOLVIMENTO'
      }
    }
  }
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
