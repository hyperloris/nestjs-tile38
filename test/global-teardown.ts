import { path as rootPath } from 'app-root-path';
import { v2 as dockerCompose } from 'docker-compose';

export default async function () {
  await dockerCompose.down({ cwd: `${rootPath}/test`, log: true });
}
