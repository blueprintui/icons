export interface IconShape {
  default: string;
}

export interface IconDefinition {
  name: string;
  shape: string | IconShape
}

export type Shape = 'unknown' | '';
export type IconRegistry = { [Key in Shape as string]?: IconDefinition };

export declare type Directions = 'up' | 'down' | 'left' | 'right';
