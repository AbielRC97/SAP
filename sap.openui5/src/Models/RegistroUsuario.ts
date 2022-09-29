export enum TipoUsuario {
  Admin = "Admin",
  Usuario = "Usuario",
}
export interface RegistroUsuario {
  nickname?: string;
  email?: string;
  contrasena?: string;
  fechaRegistro?: Date;
  tipo?: TipoUsuario;
}