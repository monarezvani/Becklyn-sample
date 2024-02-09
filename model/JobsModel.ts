export interface Coordinates {
  lon: number;
  lat: number;
}

export interface Employee {
  name: string;
  jobTitle: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    zip: string;
  };
}

export interface Location {
  name: string;
  recipient: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    zip: string;
  };
  coordinates: Coordinates;
}

export interface Level {
  title: string;
}

export interface Job {
  title: string;
  shortDescription: string;
  sortDate: string;
}

export interface Item {
  employee: Employee;
  levels: Level[];
  locations: Location[];
  job: Job;
  department:Department;
  
}
export interface Department {
  title:string;
}



// export interface JobsModel {
//   sys: SysElement;
//   total: number;
//   skip: number;
//   limit: number;
//   items: JobItemModel[];
//   errors: Error[];
//   includes: Includes;
// }

// export interface Error {
//   sys: ErrorSys;
//   details: SysClass;
// }

// export interface SysClass {
//   type: PurpleType;
//   linkType: LinkTypeEnum;
//   id: string;
// }

// export enum LinkTypeEnum {
//   Asset = "Asset",
//   ContentType = "ContentType",
//   Entry = "Entry",
//   Environment = "Environment",
//   Space = "Space",
//   Tag = "Tag",
// }

// export enum PurpleType {
//   Link = "Link",
// }

// export interface ErrorSys {
//   id: string;
//   type: string;
// }

// export interface Includes {
//   Entry: Entry[];
//   Asset: Asset[];
// }

// export interface Asset {
//   metadata: Metadata;
//   sys: AssetSys;
//   fields: AssetFields;
// }

// export interface AssetFields {
//   title: string;
//   description?: string;
//   file: File;
// }

// export interface File {
//   url: string;
//   details: FileDetails;
//   fileName: string;
//   contentType: ContentType;
// }

// export enum ContentType {
//   ImageJPEG = "image/jpeg",
//   ImagePNG = "image/png",
//   ImageSVGXML = "image/svg+xml",
// }

// export interface FileDetails {
//   size: number;
//   image: Image;
// }

// export interface Image {
//   width: number;
//   height: number;
// }

// export interface Metadata {
//   tags: Author[];
// }

// export interface Author {
//   sys: SysClass;
// }

// export interface AssetSys {
//   space: Author;
//   id: string;
//   type: LinkTypeEnum;
//   createdAt: Date;
//   updatedAt: Date;
//   environment: Author;
//   revision: number;
//   locale: Locale;
//   contentType?: Author;
// }

// export enum Locale {
//   De = "de",
// }

// export interface Entry {
//   metadata: Metadata;
//   sys: AssetSys;
//   fields: EntryFields;
// }

// export interface EntryFields {
//   name?: string;
//   headline?: FirstColumn | string;
//   labeledLink?: Author;
//   image?: Author;
//   title?: string;
//   label?: string;
//   reference?: Author;
//   overline?: string;
//   text?: PurpleText | string;
//   anchorLabel?: string;
//   anchor?: string;
//   icon?: Author;
//   newsTag?: Author;
//   entries?: Author[];
//   lists?: Author[];
//   socials?: Author[];
//   description?: string;
//   no_index?: boolean;
//   no_follow?: boolean;
//   department?: Author;
//   version?: string;
//   theme?: Theme;
//   keywords?: string[];
//   questions?: Author[];
//   append_branding?: boolean;
//   conditions?: { [key: string]: number };
//   coordinates?: Coordinates;
//   recipient?: string;
//   street?: string;
//   zip?: string;
//   city?: string;
//   phone?: string;
//   email?: string;
//   sortDate?: Date;
//   steps?: Author[];
//   header?: Author;
//   blocks?: Author[];
//   usage?: boolean;
//   jobTitle?: string;
//   logoLink?: Author;
//   mainEntries?: Author[];
//   bottomEntries?: Author[];
//   businessAreas?: Author[];
//   loginLink?: Author;
//   licenseInfo?: string;
// }

// export interface Coordinates {
//   lon: number;
//   lat: number;
// }

// export interface FirstColumn {
//   data: FirstColumnData;
//   content: FirstColumnContent[];
//   nodeType: FirstColumnNodeType;
// }

// export interface FirstColumnContent {
//   data: FirstColumnData;
//   content: PurpleContent[];
//   nodeType: PurpleNodeType;
// }

// export interface PurpleContent {
//   data: FirstColumnData;
//   marks?: SysElement[];
//   value?: string;
//   nodeType: PurpleNodeType;
//   content?: PurpleContent[];
// }

// export interface FirstColumnData {}

// export interface SysElement {
//   type: MarkType;
// }

// export enum MarkType {
//   Array = "Array",
//   Bold = "bold",
//   Italic = "italic",
// }

// export enum PurpleNodeType {
//   ListItem = "list-item",
//   Paragraph = "paragraph",
//   Text = "text",
// }

// export enum FirstColumnNodeType {
//   Document = "document",
// }

// export interface PurpleText {
//   data: FirstColumnData;
//   content: FluffyContent[];
//   nodeType: FirstColumnNodeType;
// }

// export interface FluffyContent {
//   data: PurpleData;
//   content: PurpleContent[];
//   nodeType: FluffyNodeType;
// }

// export interface PurpleData {
//   target?: Author;
// }

// export enum FluffyNodeType {
//   EmbeddedEntryBlock = "embedded-entry-block",
//   Heading2 = "heading-2",
//   Heading3 = "heading-3",
//   Hr = "hr",
//   Paragraph = "paragraph",
//   UnorderedList = "unordered-list",
// }

// export enum Theme {
//   KeinHintergrund = "Kein Hintergrund",
//   MITHintergrund = "Mit Hintergrund",
// }

// export interface JobItemModel {
//   metadata: Metadata;
//   sys: AssetSys;
//   fields: ItemFields;
// }

// export interface ItemFields {
//   name?: string;
//   overline?: string;
//   headline?: FirstColumn | string;
//   text?: FluffyText | string;
//   image?: Author;
//   labeledLink?: Author;
//   version?: string;
//   theme?: Theme;
//   anchor?: string;
//   header?: Author;
//   blocks?: Author[];
//   licenseInfo?: string;
//   imageId?: string;
//   usage?: boolean;
//   entries?: Author[];
//   title?: string;
//   firstColumn?: FirstColumn;
//   url?: string;
//   inNewTab?: boolean;
//   label?: string;
//   reference?: Author;
//   previewBackground?: string;
//   hideDefaultEntries?: boolean;
//   ctaLink?: Author;
//   phoneNumber?: string;
//   slug?: string;
//   seo?: Author;
//   content?: Author;
//   navigation?: Author;
//   footer?: Author;
//   backButton?: boolean;
//   suppressChatBot?: boolean;
//   businessTheme?: boolean;
//   sortDate?: Date;
//   shortDescription?: string;
//   sections?: Author[];
//   tags?: Author[];
//   employee?: Author;
//   description?: string;
//   no_index?: boolean;
//   no_follow?: boolean;
//   append_branding?: boolean;
//   anchorLabel?: string;
//   news?: Author;
//   suppressConsentManger?: boolean;
//   imageMobile?: Author;
//   calculator?: Author;
//   imageAlignment?: string;
//   topics?: Author[];
//   footnote?: string;
//   keywords?: string[];
//   icon?: Author;
//   steps?: Author[];
//   rating?: number;
//   author?: Author;
//   variant?: string;
//   secondColumn?: FirstColumn;
//   lists?: Author[];
//   themes?: string;
//   job?: Author;
//   footerHead?: Author;
//   descriptions?: Author[];
//   type?: Author;
//   types?: Author[];
//   department?: Author;
//   levels?: Author[];
//   locations?: Author[];
//   buttonLabel?: string;
//   productType?: number;
//   hasMaintenance?: boolean;
//   maintenanceContent?: FirstColumn;
//   scrollToCalculatorOnSticky?: boolean;
//   executedAt?: string;
// }

// export interface FluffyText {
//   data: FirstColumnData;
//   content: TentacledContent[];
//   nodeType: FirstColumnNodeType;
// }

// export interface TentacledContent {
//   data: PurpleData;
//   content: StickyContent[];
//   nodeType: FluffyNodeType;
// }

// export interface StickyContent {
//   data: FluffyData;
//   marks?: SysElement[];
//   value?: string;
//   nodeType: TentacledNodeType;
//   content?: PurpleContent[];
// }

// export interface FluffyData {
//   uri?: string;
// }

// export enum TentacledNodeType {
//   Hyperlink = "hyperlink",
//   ListItem = "list-item",
//   Text = "text",
// }
