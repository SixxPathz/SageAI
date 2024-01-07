import OpenAI from 'openai';

const openai = new OpenAI({
	apiKey: "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",
    dangerouslyAllowBrowser: true
});

export async function sendMsgToOpenAI(message){

const response = await openai.chat.completions.create({
	model: "text-davinci-003",
	temperature: 0.7,
	max_tokens: 256,
	top_p: 1,
	frequency_penalty: 0,
	presence_penalty: 0
});

return response.data.choices[0].text;
}


