import os
import json

os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = '/Users/Sam/Documents/service_account.json'

from google.analytics.data_v1beta import BetaAnalyticsDataClient
from google.analytics.data_v1beta.types import (
    DateRange,
    Dimension,
    Metric,
    RunReportRequest,
)


"""Runs a simple report on a Google Analytics 4 property."""
# TODO(developer): Uncomment this variable and replace with your
#  Google Analytics 4 property ID before running the sample.
property_id = "477770378"

# Using a default constructor instructs the client to use the credentials
# specified in GOOGLE_APPLICATION_CREDENTIALS environment variable.
client = BetaAnalyticsDataClient()

request = RunReportRequest(
    property=f"properties/{property_id}",
    dimensions=[Dimension(name="pagePath")],
    metrics=[Metric(name="activeUsers")],
    date_ranges=[DateRange(start_date="30daysAgo", end_date="today")],
)
response = client.run_report(request)

pages_dict = {}

for row in response.rows:
    pages_dict[row.dimension_values[0].value] = row.metric_values[0].value

with open("data/popular.json", "w") as f:
    f.write(json.dumps(pages_dict, indent=4))
