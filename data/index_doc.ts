import { alertDoc } from "./doc/alert_doc";
import { calendarDoc } from "./doc/calendar_doc";
import { calendarEventDoc } from "./doc/calendarEvent_doc";
import { callbackUrlDoc } from "./doc/callBack_doc";
import { colorDoc } from "./doc/color_doc";
import { consoleDoc } from "./doc/console_doc";
import { contactDoc } from "./doc/contact_doc";
import { contactsContainerDoc } from "./doc/contactContainer_doc";
import { contactsGroupDoc } from "./doc/contactsGroup_doc";
import { dataDoc } from "./doc/data_doc";
import { dateFormatterDoc } from "./doc/dateFormatter_doc";
import { datePickerDoc } from "./doc/datePicker_doc";
import { deviceDoc } from "./doc/device_doc";
import { dictationDoc } from "./doc/dictation_doc";
import { documentPickerDoc } from "./doc/documentPicker_doc";
import { drawContextDoc } from "./doc/drawContext_doc";
import { fileManagerDoc } from "./doc/fileManager_doc";
import { fontDoc } from "./doc/font_doc";
import { imageDoc } from "./doc/image_doc";
import { importModuleDoc } from "./doc/importModule_doc";
import { keychainDoc } from "./doc/keychain_doc";
import { linearGradientDoc } from "./doc/linearGradient_doc";
import { listWidgetDoc } from "./doc/listWidget_doc";
import { locationDoc } from "./doc/location_doc";
import { mailDoc } from "./doc/mail_doc";
import { messageDoc } from "./doc/message_doc";
import { moduleDoc } from "./doc/module_doc";
import { notificationDoc } from "./doc/notification_doc";
import { pathDoc } from "./doc/path_doc";
import { photosDoc } from "./doc/photos_doc";
import { pointDoc } from "./doc/point_doc";
import { quickLookDoc } from "./doc/quicklook_doc";
import { rectDoc } from "./doc/rect_doc";
import { relativeDateTimeFormatterDoc } from "./doc/relativeDateTimeFormatter_doc";
import { requestDoc } from "./doc/request_doc";
import { safariDoc } from "./doc/safari_doc";
import { scriptDoc } from "./doc/script_doc";
import { sfSymbolDoc } from "./doc/sfSymbol_doc";
import { shareSheetDoc } from "./doc/shareSheet_doc";
import { sizeDoc } from "./doc/size_doc";
import { textFieldDoc } from "./doc/textfiled_doc";
import { timerDoc } from "./doc/timer_doc";
import { uiTableCellDoc, uiTableDoc, uiTableRowDoc } from "./doc/uiTable_doc";
import { urlSchemeDoc } from "./doc/urlScheme_doc";
import { webViewDoc } from "./doc/webView_doc";
import { widgetDateDoc } from "./doc/widgetDate_doc";
import { widgetImageDoc } from "./doc/widgetImage_doc";
import { widgetSpacerDoc } from "./doc/widgetSpacer_doc";
import { widgetStackDoc } from "./doc/widgetStack_doc";
import { widgetTextDoc } from "./doc/widgetText_doc";
import { argsDoc } from "./doc/arg_doc";
import { reminderDoc } from "./doc/reminder_doc";
import { speechDoc } from "./doc/speech_doc";
import { uuidDoc } from "./doc/uuid_doc";
import { xmlParserDoc } from "./doc/xmlparse_doc";
export const docs = [
  alertDoc,
  argsDoc,

  calendarDoc,
  calendarEventDoc,
  callbackUrlDoc,

  colorDoc,
  consoleDoc,

  contactDoc,
  contactsContainerDoc,
  contactsGroupDoc,

  dataDoc,

  dateFormatterDoc,
  datePickerDoc,

  deviceDoc,
  dictationDoc,
  documentPickerDoc,
  drawContextDoc,

  fileManagerDoc,
  fontDoc,

  imageDoc,
  importModuleDoc,

  keychainDoc,

  linearGradientDoc,
  listWidgetDoc,
  locationDoc,

  mailDoc,
  messageDoc,
  moduleDoc,

  notificationDoc,

  pathDoc,
  photosDoc,
  pointDoc,

  quickLookDoc,
  rectDoc,
  relativeDateTimeFormatterDoc,

  reminderDoc,
  requestDoc,

  safariDoc,
  scriptDoc,
  sfSymbolDoc,
  shareSheetDoc,
  sizeDoc,
  speechDoc,

  textFieldDoc,
  timerDoc,

  uiTableDoc,
  uiTableCellDoc,
  uiTableRowDoc,

  urlSchemeDoc,
  uuidDoc,

  webViewDoc,
  widgetDateDoc,
  widgetImageDoc,
  widgetSpacerDoc,
  widgetStackDoc,
  widgetTextDoc,

  xmlParserDoc,
];

export function getDoc(slug: string) {
  return docs.find((doc) => doc.slug === slug);
}