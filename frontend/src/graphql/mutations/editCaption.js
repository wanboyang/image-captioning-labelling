import gql from 'graphql-tag';

export default gql`
  mutation editCaption($input: createEditCaption) {
    editCaption(createEditCaption: $input) {
      captionEditCount
      captionCuratedCount
      captionEmotionCount
      captions {
        obj_id
        image_id
        step
        curatedCaptions
        captionEdit {
          caption_id
          text
        }
        captionEmotion {
          happy
          sad
          angry
        }
      }
    }
  }
`;
