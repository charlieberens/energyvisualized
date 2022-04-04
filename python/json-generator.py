import pandas as pd
import json

file_name = input("Input File Name: ")
output_file_name = input("Output File Name: ")
arr = pd.read_csv('./python/files/' + file_name + '.csv', sep='\t').values.tolist()
output_arr = [{"x": x, "y": y} for [x,y] in arr]

output = {
    "meta": {
        "source": {
            "text": "",
            "url": ""
        },
        "x": "",
        "y": "",
        "title": ""
    },
    "data": output_arr
}

json_string = json.dumps(output)
with open('./public/data/' + output_file_name + '.json', 'w') as outfile:
    outfile.write(json_string)
