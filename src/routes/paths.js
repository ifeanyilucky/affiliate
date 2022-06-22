function path(root, sublink) {
  return `${root}/${sublink}`;
}

const ROOT = '';

export const PATH = {
  home: ROOT,
  login: path(ROOT, 'login'),
  register: path(ROOT, 'register'),
  dashboard: path(ROOT, 'dashboard'),
};
