#from time import sleep
from translate import Translator
import numpy as np
import json

arrayOfElements=[]
data = [] #json object
dictionary_object= {
    "english": "",
    "german": "",
    "polish": "",
    "french": ""
}



input_file = "C:/Users/Szelma/Desktop/engwords.txt"
output_file = "C:/Users/Szelma/Desktop/engwords.js"

source_language="en"
dest_language_pl="pl"
dest_language_de='de'
dest_language_fr="fr"
wyraz = "jeœæ"

german=""
polish=""
french=""

#sleep(.4)
  #print(x)

f = open(input_file, "r")
for x in f:

    translator= Translator(to_lang="de")
    translation_german = translator.translate(x)

    translator = Translator(to_lang="pl")
    translation_polish = translator.translate(x)

    translator = Translator(to_lang="fr")
    translation_french = translator.translate(x)

    x.replace('\n', '')
    dictionary_object['english']=x
    dictionary_object['german']=translation_german
    dictionary_object['polish']=translation_polish
    dictionary_object['french']=translation_french

    print(dictionary_object)
    arrayOfElements.append(dictionary_object)
#p=translator.translate(x, dest=dest_language_de,src=source_language)
  #print(f'{p.text}')
  #
  #dictionary_object["german"]=german
np.savetxt("C:/Users/Szelma/Desktop/results.txt",arrayOfElements)