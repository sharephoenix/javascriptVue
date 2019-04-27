export class Module {
  moduleId: string
  moduleName: string = "defaultName"
  moduleDisplayName: string = "defaultDisplayName"
  eventModel?: ModuleEvent
  
  constructor(moduleId: string) {
    this.moduleId = moduleId
  }
}

export class ModuleEvent {
  eventId: string
  moduleId: string = ""
  eventName: string = ""
  eventDisplayName: string = ""
  eventParams: string = ""
  isEnable: boolean = false

  constructor(eventId: string) {
    this.eventId = eventId
  }
}