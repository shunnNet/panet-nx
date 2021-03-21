/*
  用途：
  引用 @/components/lib/index.js 底下的元件可以:
    import { CCol, CRow } from @/components/lib/index.js

  原本必須像下面這樣寫兩行:
    import CCol from @/components/lib/Ccol.vue
    import CRow from @/components/lib/Crow.vue

  有這個檔案後，上面兩種寫法都支援
*/

// import AnimationFloat from "./AnimationFloat.vue"
// import MarqueeList from "./marqueeList.vue"

import CCol from "./CCol.vue";
import CRow from "./CRow.vue";
import CRowTransition from "./CRowTransition.vue";
import {
  CFormatInput,
  CSelect,
  CInput,
  CTextarea,
  CRadio,
  CRadioGroup,
  CCheckbox,
  CDate,
} from "./form";
import TabPane from "./TabPane.vue";
import Tabs from "./Tabs.vue";
import TransitionSlide from "./animation/TransitionSlide.vue";
import ProgressCounter from "./animation/ProgressCounter.vue";
import ProgressProvider from "./animation/ProgressProvider.vue";
import Rotater from "./animation/Rotater.vue";
import IconText from "./IconText.vue";

export {
  CCol,
  CRow,
  CRowTransition,
  CFormatInput,
  CSelect,
  CInput,
  CTextarea,
  CRadio,
  CRadioGroup,
  CCheckbox,
  CDate,
  TabPane,
  Tabs,
  TransitionSlide,
  ProgressCounter,
  ProgressProvider,
  Rotater,
  IconText,
};
