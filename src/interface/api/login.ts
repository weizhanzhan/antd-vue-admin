export interface LoginInfo {
  email:string
	password:string
}
export interface LoginResponse {
  access_token:string
}

export interface UserInfo{
	id: string,
	name: string
	email: string
	role: string
	sex: number
	avatar: string
}
