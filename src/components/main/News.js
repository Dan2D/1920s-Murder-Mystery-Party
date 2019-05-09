import React from "react";

const News = props => {
    //TODO(REPLACE BULLET POINTS WITH DASHES)
    return(
        <div>
        <div className="rulesIntro-container">
            <h2>THE PLAN</h2>
            <p>
                There are 10 supporting players in this murder mystery however
                the roles you’ll be playing are quite different. Most of you
                will be attempting to unearth the truth of Andrew J
                McCutcheon’s murder, while 1 or more of you, who shall remain
                un-named... will attempt to disguise that truth and escape the
                clutches of justice!
                <br/><br/>
                Each of you will take on the role of a character working in
                close relation to McCutcheon, all of you are suspects in this
                most heinous of murders. The night will be sectioned into
                rounds, during each round clues will begin to be revealed which
                point you in the direction of the real murderer!
                <br/><br/>
                The object of this night of mystery is to bring the murder (or
                murderers...) to justice. At some point during the night before
                the end of the 4th round, the murderer(s) will be told who he /
                she / they are.
                <br/><br/>
                YOU ARE GUILTY UNTIL PROVEN INNOCENT!
            </p>
        </div>
        <div className="rulesSpec-container">
            <h2>THE RULES</h2>
                    <p>
                        I've supplied summaries of your characters and the plot, but
                        it would be beneficial to read through the news clipping and
                        your character backgrounds as well!
                    </p>
                    <p><strong>DO NOT TURN PAST ANY PAGE THAT IS MARKED</strong></p>
                    <p>
                    The Game is sectioned into rounds and starts with Round 1.
                     <br/>
                    Round 1 should start with introductions using the information
                    avaialable to each character. To begin a round, one player
                    should reveal a clue about someone other than themselves.
                    </p>
                    
                    <p>Two types of clues exist in this game.</p>
                    <ol>
                        <li>
                        A clue about someone other than yourself. <br />
                        Example "You saw Mary kissing John on the set last week,
                        when Phil walked in the door and Mary abruptly broke off
                        the kiss."
                        <br />
                        (You may divulge this type of clue at any point during
                        the round)
                        </li>
                        <br/>
                        <li>
                        A clue about yourself <br />
                        Example: "You own a fuzzy pink teddy bear. It is soft,
                        cuddly and has a hidden pocket in which you keep a
                        diamond brooch."<br />
                        A clue about yourself does not need to be revealed unless
                        someone else brings it up first 
                        <br /><br/>
                        If this is the case you cannot lie about it, but you
                        don't need to divulge the full clue either, for instance
                        you could leave out the part about the hidden pocket or
                        the diamond brooch.
                        </li>
                    </ol>
                    <ul>
                    <li>
                    Occasionally a clue will seem to come out of nowhere, this
                    means that someone else has a clue that refers to your clue.
                    If this is the case take it as a warning that the subject wil
                    be coming up soon and you should prepare yourself to talk
                    about it and/or what to not divulge.
                    </li>
                    <br/>
                    <li>
                    When answering questions it is your primary duty to try not
                    to incriminate yourself, you can avoid doing this by leaving
                    out parts of the truth or trying to change subjects, but one
                    exception is that <strong>YOU MAY NOT LIE!</strong> 
                    <br /><br />
                    <li>
                    Occasionally you may be asked a question that you don't have
                    the answer to, you may reply with the codephrase "That's a
                    very good question." 
                    </li>
                    This should let the other players know that none of your
                    clues so far give an answer to that question. (You can't use
                    this phrase for any other reason) Some clues may be inside
                    curly brackets {}, this means this info is something you'd
                    know but not necessarily volunteer to tell others.
                    </li>
                    <br/>
                    <li>
                    After all the clues in the First Round are revealed the host
                    will instruct you to turn to the next page. 
                    <br />
                    After everyone has studied their new clues, the next Round
                    may begin. <br/><br/>
                    </li>
                    <li>
                    After the 4th Round the players have all the clues necessary
                    to solve the murder. 
                    <br />
                    Following a short period of discussing evidence among themselves, each player
                    should give an answer as to who they think is the culprit(s)
                    of the murder.
                    </li>
                    <br/>
                    <li>
                    Once everyone has given their answers the host will instruct
                    the players to turn to the last page in their booklet and
                    read from the section marked SOLUTION. 
                    <br />
                    Each player has a part of the solution marked 1 through 8 and
                    should read their part in order.
                    </li>
                </ul>
                   
            </div>
        </div>
    )
}

export default News;