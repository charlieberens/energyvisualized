import pandas as pd
import json

file_name = input("Input File Name: ")
df = pd.read_csv('./files/' + file_name + '.csv')

arr = df.values.tolist()
ys = df.columns.tolist()[1:]

output_arr = [
    {
        "x": int(el[0]),
        "ys": el[1:]
    } for el in arr
]

output = {
    "meta": {
        "source": {
            "text": "",
            "url": ""
        },
        "x": "",
        "y": "",
        "ys": ys,
        "title": ""
    },
    "data": output_arr
}

# output_file_name = input("Output File Name: ")
output_file_name = file_name

json_string = json.dumps(output)
with open('../public/data/' + 'nuclear/' + output_file_name + '.json', 'w') as outfile:
    outfile.write(json_string)
