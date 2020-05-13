from mongoengine import Document, EmbeddedDocument, fields


class Funds(Document):
	FREQUENCY = fields.StringField(required=True)
	ISIN = fields.StringField(unique=True, required=True)
	AMC = fields.FloatField(required=False)
	MCCODE = fields.FloatField(required=False)
	NAME = fields.StringField(required=True)
	MANAGER = fields.StringField(required=False)
	LEGAL_TYPE = fields.StringField(required=False)
	INV_TYPE = fields.StringField(required=False)
	SUBSCRIBERS = fields.StringField(required=False)
	RESULT_TYPE = fields.StringField(required=False)
	DEPOSITORS = fields.StringField(required=False)
	PLACEMENT_NETWORK = fields.StringField(required=False)
	PROMOTERS = fields.StringField(required=False)
	ENTRY_RATE = fields.FloatField(required=False)
	EXIT_RATE = fields.FloatField(required=False)
	MGT_RATE = fields.FloatField(required=False)

class daily_performance(Document):
    ISIN = fields.StringField(required=True)
    DATE = fields.DateTimeField(required=True)
    AN = fields.FloatField(required=True)
    VL = fields.FloatField(required=True)

class weekly_performance(Document):
    ISIN = fields.StringField(required=True)
    DATE = fields.DateTimeField(required=True)
    AN = fields.FloatField(required=True)
    VL = fields.FloatField(required=True)
