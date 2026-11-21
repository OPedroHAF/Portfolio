export const projects = [
  {
    slug: 'valorant-friends',
    title: 'How to NOT play Valorant with your friends',
    description:
      'A casual gaming project where friends explore funny and chaotic Valorant moments. Fully edited using CapCut software. Raw material of 44 minutes.',
    youtubeVideoId: '2bhWzCuyNWU',
    status: "Finished"
  },
  {
    slug: 'cuida-plus',
    title: 'Cuida+',
    description:
      'A university project focused on creating a practical and user-centered care solution.',
    repositoryUrl: '',
    status: "WORK IN PROGRESS"
  }
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
