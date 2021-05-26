interface IRegisterDeviceRequestParams {
  type: string
  model: string
  os: string
}

interface IRegisterRequestParams {
  nickName: string
  email: string
  firstName: string
  lastName: string
  gender?: string // Male/Female
  dateOfBirth?: string
  phone?: string
  emergencyContactName?: string
  emergencyContactPhone?: string
  address1?: string
  address2?: string
  city?: string
  state?: string
  zip?: string
  password: string
  passwordConfirmation: string
  termsOfUse?: boolean
  privacyPolicy?: boolean
}

interface ILoginRequestParams {
  email: string
  password: string
  session_id?: string
}

export type {
  IRegisterDeviceRequestParams,
  IRegisterRequestParams,
  ILoginRequestParams,
}
