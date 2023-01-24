interface BaseInterface {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

class BaseEntity implements Partial<BaseInterface> {
  id: string | undefined;
  createdAt: Date | undefined;
  updatedAt: Date | undefined;
}

export { BaseEntity, BaseInterface };
