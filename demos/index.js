const gda = require("google-dictionary-api")

async function getWordInfo(word) {
    let info = "?"
    try {
        info = await gda.search(word, "en")
    }
    catch (err) {
        console.log("Error:", err)
    }
    return info
}

async function demo1() {
    console.log("Google dictionary demo1 - 10 Jan 2022/Mon")
    gda.search("hello", "en")
        .then(res => {
            console.log("Res-> ", JSON.stringify(res, null, 2))
        })
        .catch(err => {
            console.log(err)
        })

}

async function demo2() {
    let info
    info = await getWordInfo("hi")
    console.log(JSON.stringify(info, null, 2))

    info = await getWordInfo("inevitable")
    console.log(JSON.stringify(info, null, 2))

}


// demo1()
demo2()