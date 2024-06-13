import type { Schema, Attribute } from '@strapi/strapi';

export interface LessonsLessons extends Schema.Component {
  collectionName: 'components_lessons_lessons';
  info: {
    displayName: 'Lessons';
    icon: 'play';
    description: '';
  };
  attributes: {
    TitleOfLesson: Attribute.String;
    IDVideo: Attribute.String & Attribute.Required;
    Time: Attribute.Decimal & Attribute.Required;
    disabled: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'lessons.lessons': LessonsLessons;
    }
  }
}
