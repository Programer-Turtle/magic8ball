let answers =["Yes", "most likely", "maybe", "Unable to tell", "slightly unlikely", "unlikley", "no"];
let amount = answers.length;
let chocie = 0;
let previous_choice = 0;

function predict()
{
    question = document.getElementById("question").value;
    if (question != "")
    {
        chocie = Math.floor(Math.random() * amount);
        if (chocie == previous_choice)
        {
            predict();
        }
        previous_choice = chocie;
        document.getElementById("answerbox").innerHTML = answers[chocie];
    }

    else
    {
        document.getElementById("answerbox").innerHTML = "Must ask question!";
    }
}
