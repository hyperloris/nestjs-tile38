import { path as rootPath } from 'app-root-path';
import dockerCompose from 'docker-compose';

export default async function () {
  await dockerCompose.down({ cwd: `${rootPath}/test`, log: true });
}
