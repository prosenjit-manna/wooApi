export enum NonceMethod {
  register = 'register',
  get_avatar = 'get_avatar',
  get_userinfo = 'get_userinfo',
  retrieve_password = 'retrieve_password',
  validate_auth_cookie = 'validate_auth_cookie',
  generate_auth_cookie = 'generate_auth_cookie',
  get_currentuserinfo = 'get_currentuserinfo',
  get_user_meta = 'get_user_meta',
  update_user_meta = 'update_user_meta',
  delete_user_meta = 'delete_user_meta',
  xprofile = 'xprofile',
  xprofile_update = 'xprofile_update',
  fb_connect = 'fb_connect'
}

export interface CreateNonce {
  controller: string;
  method: string; // NonceMethod
}

export interface CreateNonceRes {
  status: string;
  controller: string;
  method: NonceMethod;
  nonce: string;
}

export interface RegisterPayload {
  username: string;
  email: string;
  user_pass?: string;
  nonce: string;
  display_name: string;
  notify: string;
}

export interface RegisterRsponse {
  cookie: string;
  status: string;
  user_id: number;
}

export interface LoginPayload {
  username: string;
  password: string;
}
