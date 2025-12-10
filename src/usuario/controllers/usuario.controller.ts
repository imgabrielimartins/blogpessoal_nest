import { Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../entities/usuario.entity';

@Controller('/usuarios')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post('/cadastrar')
  @HttpCode(HttpStatus.CREATED)
  create(usuario: Usuario): Promise<Usuario> {
    return this.usuarioService.create(usuario);
  }
}
