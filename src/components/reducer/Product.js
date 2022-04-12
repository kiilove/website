export function productReducer(state, action) {
  switch (action.type) {
    case "COLOR_ADD":
      state.color.push({
        code: action.payload.code,
        title: action.payload.title,
      });
      return state;
    case "COLOR_DEL":
      state.color.slice(action.payload.color.idx, 1);
      return state;
    case "COLOR_UPDATE":
      const colorArr = [...state.color];
      colorArr[action.payload.idx] = {
        ...colorArr[action.payload.idx],
        [action.payload.keys]: action.payload.value,
      };
      state.color = colorArr;
      return state;
    case "OPTION_ADD":
      state.options.push({
        groupTitle: undefined,
        subComment: undefined,
        subCommentLink: undefined,
      });
      return state;

    case "OPTION_ITEM_ADD":
      if (state.options[action.payload.gIdx].options) {
        state.options[action.payload.gIdx].options.push({
          title: undefined,
          value: 0,
        });
      } else {
        state.options[action.payload.gIdx].options = [
          {
            title: undefined,
            value: 0,
          },
        ];
      }
      return state;

    case "OPTION_UPDATE":
      switch (action.payload.target) {
        case "GROUP":
          const optionArr = [...state.options];
          optionArr[action.payload.gIdx] = {
            ...optionArr[action.payload.gIdx],
            [action.payload.keys]: action.payload.value,
          };
          state.options = optionArr;
          return state;
        case "ITEM":
          const itemArr = [...state.options[action.payload.gIdx].options];
          itemArr[action.payload.iIdx] = {
            ...itemArr[action.payload.iIdx],
            [action.payload.keys]: action.payload.value,
          };
          state.options[action.payload.gIdx].options = itemArr;
          return state;
        default:
          return state;
      }

    case "SPECS_ADD":
      state.specs.push({
        title: undefined,
        titleComment: undefined,
        isThumb: true,
      });
      return state;

    case "SPECS_UPDATE":
      state.specs[action.payload.sIdx] = {
        ...state.specs[action.payload.sIdx],
        [action.payload.keys]: action.payload.value,
        isThumb: action.payload.isThumb,
      };
      return state;

    case "SPECS_DEL":
      state.specs.splice(action.payload.sIdx, 1);
      return state;

    case "INPUT_UPDATE":
      return { ...state, [action.payload.keys]: action.payload.value };

    default:
      return state;
  }
}
