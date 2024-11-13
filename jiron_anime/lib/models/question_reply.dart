//***  AUTO-GENERATED FILE - DO NOT MODIFY ***//

import 'model_base.dart';
import 'product_question.dart';

class QuestionReply implements ToJson, Id {
  @override
  int? id;
  String? text;
  String? asunto;
  DateTime? createdAt;
  int? questionId;
  ProductQuestion? productQuestion;

  QuestionReply({
    this.id,
    this.text,
    this.asunto,
    this.createdAt,
    this.questionId,
    this.productQuestion,
  });

  factory QuestionReply.fromJson(Map<String, dynamic> json) => QuestionReply(
      id: json['id'] as int?,
      text: json['text'] as String?,
      asunto: json['asunto'] as String?,
      createdAt:
          json['createdAt'] != null ? DateTime.parse(json['createdAt']) : null,
      questionId: json['questionId'] as int?,
      productQuestion: json['productQuestion'] != null
          ? ProductQuestion.fromJson(
              json['productQuestion'] as Map<String, dynamic>)
          : null);

  QuestionReply copyWith({
    int? id,
    String? text,
    String? asunto,
    DateTime? createdAt,
    int? questionId,
    ProductQuestion? productQuestion,
  }) {
    return QuestionReply(
        id: id ?? this.id,
        text: text ?? this.text,
        asunto: asunto ?? this.asunto,
        createdAt: createdAt ?? this.createdAt,
        questionId: questionId ?? this.questionId,
        productQuestion: productQuestion ?? this.productQuestion);
  }

  QuestionReply copyWithInstance(QuestionReply questionReply) {
    return QuestionReply(
        id: questionReply.id ?? id,
        text: questionReply.text ?? text,
        asunto: questionReply.asunto ?? asunto,
        createdAt: questionReply.createdAt ?? createdAt,
        questionId: questionReply.questionId ?? questionId,
        productQuestion: questionReply.productQuestion ?? productQuestion);
  }

  @override
  Map<String, dynamic> toJson() => ({
        if (id != null) 'id': id,
        if (text != null) 'text': text,
        if (asunto != null) 'asunto': asunto,
        if (createdAt != null) 'createdAt': createdAt,
        if (questionId != null) 'questionId': questionId,
        if (productQuestion != null) 'productQuestion': productQuestion
      });

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is QuestionReply &&
          runtimeType == other.runtimeType &&
          id == other.id &&
          text == other.text &&
          asunto == other.asunto &&
          createdAt == other.createdAt &&
          questionId == other.questionId &&
          productQuestion == other.productQuestion;

  @override
  int get hashCode =>
      id.hashCode ^
      text.hashCode ^
      asunto.hashCode ^
      createdAt.hashCode ^
      questionId.hashCode ^
      productQuestion.hashCode;
}
