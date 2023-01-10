const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    organization: "org-uRzmXehXH83gTI4kAiDbrQbQ",
    apiKey: 
    "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",
});
const openai = new OpenAIApi(configuration);
async function callApi() {
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "This is a test",
        maxTokens: 7,
        temperature: 0,
    });
    console.log(response.data.choices[0].text);
}
callApi();


