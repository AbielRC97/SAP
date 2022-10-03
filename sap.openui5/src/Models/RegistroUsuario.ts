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
export interface LogIn {
  email?: string;
  contrasena?: string;
}
export interface Contacto {
  idContacto: number;
  nombre?: string;
  telefono?: string;
  fecha?: Date;
}
