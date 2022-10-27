import React from "react";
import "./BalletForm.css";

class BalletForm extends React.Component {
    render() {
        return (
            <div class="start">
                <div id="h">
                    <h1>Vote Form</h1>
                </div>
                <div id="vote">
                    <center>
                        <form class="pa4">
                            <fieldset id="favorite_movies" class="bn">
                                <legend class="fw7 mb2">
                                    Which is the best programming language?
                                </legend>
                                <div class="flex items-center mb2">
                                    <input
                                        class="mr2"
                                        type="radio"
                                        id="Python"
                                        value="Python"
                                        name="vote"
                                    />
                                    <label for="Python" class="lh-copy">
                                        Python
                                    </label>
                                </div>
                                <div class="flex items-center mb2">
                                    <input
                                        class="mr2"
                                        type="radio"
                                        id="JavaScript"
                                        value="JavaScript"
                                        name="vote"
                                    />
                                    <label for="JavaScript" class="lh-copy">
                                        JavaScript
                                    </label>
                                </div>
                                <div class="flex items-center mb2">
                                    <input
                                        class="mr2"
                                        type="radio"
                                        id="Java"
                                        value="Java"
                                        name="vote"
                                    />
                                    <label for="Java" class="lh-copy">
                                        Java
                                    </label>
                                </div>
                                <div class="flex items-center mb2">
                                    <input
                                        class="mr2"
                                        type="radio"
                                        id="SQL"
                                        value="SQL"
                                        name="vote"
                                    />
                                    <label for="SQL" class="lh-copy">
                                        SQL
                                    </label>
                                </div>
                                <div class="flex items-center mb2">
                                    <input
                                        class="mr2"
                                        type="radio"
                                        id="Ruby"
                                        value="Ruby"
                                        name="vote"
                                    />
                                    <label for="Ruby" class="lh-copy">
                                        Ruby
                                    </label>
                                </div>
                                <div class="flex items-center mb2">
                                    <input
                                        class="mr2"
                                        type="radio"
                                        id="Rust"
                                        value="Rust"
                                        name="vote"
                                    />
                                    <label for="Rust" class="lh-copy">
                                        Rust
                                    </label>
                                </div>
                                <div class="flex items-center mb2">
                                    <input
                                        class="mr2"
                                        type="radio"
                                        id="Nope"
                                        value="Nope"
                                        name="vote"
                                    />
                                    <label for="Nope" class="lh-copy">
                                        NO, I like all programming languages
                                        equally
                                    </label>
                                </div>
                            </fieldset>
                        </form>
                    </center>
                </div>
            </div>
        );
    }
}

export default BalletForm;
