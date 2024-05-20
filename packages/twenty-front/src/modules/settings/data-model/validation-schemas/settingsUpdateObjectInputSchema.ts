import { objectMetadataItemSchema } from '@/object-metadata/validation-schemas/objectMetadataItemSchema';
import { UpdateObjectPayload } from '~/generated-metadata/graphql';

export const settingsUpdateObjectInputSchema = objectMetadataItemSchema
  .pick({
    description: true,
    icon: true,
    imageIdentifierFieldMetadataId: true,
    isActive: true,
    labelIdentifierFieldMetadataId: true,
    labelPlural: true,
    labelSingular: true,
  })
  .partial()
  .transform<UpdateObjectPayload>((value) => ({
    ...value,
  }));
