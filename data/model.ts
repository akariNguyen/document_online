// ===== ENUM =====
export type DocMemberType =
  | "property"
  | "method"
  | "constructor";

export type AccessType =
  | "static"
  | "none";

// ===== PARAM =====
export interface DocParam {
  name: string;
  type: string;
  description?: string;
  optional?: boolean;
}

// ===== RETURN =====
export interface DocReturn {
  type: string;
  description?: string;
}

// ===== MEMBER =====
export interface DocMember {
  name: string;
  type: DocMemberType;

  access?: AccessType;

  description: string;
  longDescription?: string;

  signature?: string;

  // kiểu cũ
  params?: DocParam[];
  returns?: DocReturn;

  // kiểu giống Dart
  isStatic?: boolean;
  parameters?: DocParam[];
  returnType?: string;
  returnDescription?: string;
}

// ===== MAIN DOC =====
export interface DocModel {
  slug: string;
  title: string;

  description: string;
  detail?: string;

  // giống Dart
  name?: string;
  kind?: string;
  shortDescription?: string;
  longDescription?: string;

  properties: DocMember[];
  methods: DocMember[];
}