export class CarItems {
  private constructor(
    readonly eletricWindow = false,
    readonly hidraulicSteenring = false,
    readonly eletricicSteenring = false,
    readonly automaticGearBox = false,
    readonly airConditioning = false,
    readonly airbag = false,
    readonly alarm = false,
    readonly eletricLock = false,
  ) {}

  static from(items: {
    eletricWindow?: boolean;
    hidraulicSteenring?: boolean;
    eletricicSteenring?: boolean;
    automaticGearBox?: boolean;
    airConditioning?: boolean;
    airbag?: boolean;
    alarm?: boolean;
    eletricLock?: boolean;
  }) {
    return new CarItems(
      items.eletricWindow,
      items.hidraulicSteenring,
      items.eletricicSteenring,
      items.automaticGearBox,
      items.airConditioning,
      items.airbag,
      items.alarm,
      items.eletricLock,
    );
  }
}
