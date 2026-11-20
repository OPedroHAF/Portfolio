export const projects = [
  {
    slug: 'valorant-friends',
    title: 'How to NOT play Valorant with your friends',
    description:
      'A casual gaming project where friends explore funny and chaotic Valorant moments.',
    youtubeVideoId: '2bhWzCuyNWU',
    repositoryUrl: ''
  },
  {
    slug: 'cuida-plus',
    title: 'Cuida+',
    description:
      'A university project focused on creating a practical and user-centered care solution.',
    youtubeVideoId: '',
    repositoryUrl: ''
  }
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
