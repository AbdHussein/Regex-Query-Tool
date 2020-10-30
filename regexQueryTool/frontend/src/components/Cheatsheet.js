import React, { Component } from 'react'

class Cheatsheet extends Component {
    render() {
        return (
            <div style={{paddingLeft: '15px', paddingTop: '15px', float: 'right', width: '40%'}}>
                <h4>Cheat Sheet</h4>
                <tbody><tr>
                    <th colspan="2">Character classes</th>
                </tr>
                <tr>
                    <td>.</td>
                    <td>any character except newline</td>
                </tr>
                <tr>
                    <td>\w \d \s</td>
                    <td>word, digit, whitespace</td>
                </tr>
                <tr>
                    <td>\W \D \S</td>
                    <td>not word, digit, whitespace</td>
                </tr>
                <tr>
                    <td>[abc]</td>
                    <td>any of a, b, or c</td>
                </tr>
                <tr>
                    <td>[^abc]</td>
                    <td>not a, b, or c</td>
                </tr>
                <tr>
                    <td>[a-g]</td>
                    <td>character between a &amp; g</td>
                </tr>
                <tr>
                    <th colspan="2">Anchors</th>
                </tr>
                <tr>
                    <td>^abc$</td>
                    <td>start / end of the string</td>
                </tr>
                <tr>
                    <td>\b</td>
                    <td>word boundary</td>
                </tr>
                <tr>
                    <th colspan="2">Escaped characters</th>
                </tr>
                <tr>
                    <td>\. \* \\</td>
                    <td>escaped special characters</td>
                </tr>
                <tr>
                    <td>\t \n \r</td>
                    <td>tab, linefeed, carriage return</td>
                </tr>
                <tr>
                    <td>\u00A9</td>
                    <td>unicode escaped ©</td>
                </tr>
                <tr>
                    <th colspan="2">Groups &amp; Lookaround</th>
                </tr>
                <tr>
                    <td>(abc)</td>
                    <td>capture group</td>
                </tr>
                <tr>
                    <td>\1</td>
                    <td>backreference to group #1</td>
                </tr>
                <tr>
                    <td>(?:abc)</td>
                    <td>non-capturing group</td>
                </tr>
                <tr>
                    <td>(?=abc)</td>
                    <td>positive lookahead</td>
                </tr>
                <tr>
                    <td>(?!abc)</td>
                    <td>negative lookahead</td>
                </tr>
                <tr>
                    <th colspan="2">Quantifiers &amp; Alternation</th>
                </tr>
                <tr>
                    <td>a* a+ a?</td>
                    <td>0 or more, 1 or more, 0 or 1</td>
                </tr>
                <tr>
                    <td>a{5} a{"2,"}</td>
                    <td>exactly five, two or more</td>
                </tr>
                <tr>
                    <td>a{1,3}</td>
                    <td>between one &amp; three</td>
                </tr>
                <tr>
                    <td>a+? a{"2,"}?</td>
                    <td>match as few as possible</td>
                </tr>
                <tr>
                    <td>ab|cd</td>
                    <td>match ab or cd</td>
                </tr>
            </tbody>
            </div>
        )
    }
}
export default Cheatsheet;