interface IDevice {
  id: string
  type: string
  model: string
  os: string
  summary?: object
}

interface IUser {
  email: string
  password: string
}

interface IElevatorCall {
  title: string
  count: string
}

export type { IDevice, IUser, IElevatorCall }
