import React, { useContext, useEffect, useState } from 'react'
import { arrayMove } from 'react-sortable-hoc'
import { Question } from '../clientModels/Question'
import { UserContext } from '../contexts/UserContext'
import { deleteRequest, getRequest, postRequest } from '../functions/api_Functions'
import { isEmptyOrSpace, validateSubmission } from '../functions/validation_Functions'
import { ArrayMoveProps, SortableList } from './shared components/SortableList'

const QuestionsBoard = () => {
    const [submission, setSubmission] = useState<string>('')
    const [error, setError] = useState<string>('')
    const [questions, setQuestions] = useState<Question[]>([])
    const {user, userDispatch} = useContext(UserContext)

    useEffect(() => {
        getRequest('Questions').then(data => {
            console.log(data)
            if (data) {
                setQuestions(data);
            }
        })
    },[])

    const onSubmitClick = () => {
        const submissionError = validateSubmission(user.user?.name,user.user?.email,submission, new Date())
        if (isEmptyOrSpace(error)) {
            if(user.user && user.user.name && user.user.email) {
                const newSub:Question = new Question(undefined,user.user.name,user.user.email, new Date(), submission);
                postRequest(newSub, 'Questions').then(data => {
                    //setQuestions(questions.concat([data])) mvoed for demo
                })
                setQuestions(questions.concat([newSub]))
                setSubmission('');
            }
        } else {
            setError(submissionError);
        }
    }

    const onSortEnd = (props: ArrayMoveProps) => {
        if (props.oldIndex !== props.newIndex) {
          const newList = arrayMove(
            questions,
            props.oldIndex,
            props.newIndex
          );
            setQuestions(newList);
        }
      };

    const onRemove = (newQuestions:Question[], id:number|undefined) => {
        if(id) {
            deleteRequest('Questions', id.toString()).then(data => {
            })
            //setQuestions(newQuestions); moved for demo
        }
        setQuestions(newQuestions);
    }

    console.log(questions)
    return (
        <div className='h h-centre'>
            <div className='v width-40'>
                <div className='h h-centre'>
                    <h4 className='top-margin-s'>Questions Board</h4>
                </div>
                <div className='h h-centre'>
                    <p className='top-margin-xs'>Welcome to the questions page. Please submit your questions below. Drag and drop the questions into most important to least.</p>
                </div>
                <div className='h h-centre'>
                    <p className='top-margin-xs'>{error}</p>
                </div>
                <div className='h h-centre'>
                    <div className='h sb width-75'>
                        <input className='top-margin-xs width-75'
                            type="text"
                            placeholder="Your question"
                            value={submission}
                            onChange={(e) => setSubmission(e.target.value)}
                        />
                        <button className='top-margin-xs' onClick={onSubmitClick}>Submit</button>
                    </div>
                </div>
                {questions && <SortableList onSortEnd={onSortEnd} onRemove={onRemove} list={questions}/>}
            </div>
        </div>
    )
}

export { QuestionsBoard }