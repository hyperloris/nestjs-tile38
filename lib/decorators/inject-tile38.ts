import { Inject } from '@nestjs/common';

import { tile38ModuleToken } from './../constants';

export function InjectTile38() {
  return Inject(tile38ModuleToken);
}
