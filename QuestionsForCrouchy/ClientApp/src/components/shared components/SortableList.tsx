import React from 'react';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import { Question } from '../../clientModels/Question';
import { removeFromArrayByIndex } from '../../functions/array_Functions';

const SortableList = React.memo(SortableContainer((props:ISortableListProps) => {
    let key: number = -1
    const onRemove = (id:number):void => {
      props.onRemove(removeFromArrayByIndex(id,props.list),props.list[id].id)
    }

    return (
      <ul>
        {props.list.map((label) => {
          key += 1;
         return (
            <SortableItem key={key} index={key} id={key} onRemove={onRemove} question={label} disabled={false} showRemove={true}/>
        )})}
      </ul>
    );
  }));

  const SortableItem = SortableElement((props:ISortableItemProps) => {
    console.log(props.question.name,props.question.email,props.question.published,props.question.details)
    return (
        <div className='h top-margin-xs'>
          <p className='left-margin-xs'>{props.question.name}</p>
          <p className='left-margin-xs'>{props.question.email}</p>
          <p className='left-margin-xs'>{props.question.published}</p>
          <p className='left-margin-xs'>{props.question.details}</p>
          {props.showRemove && <button className='left-margin-xs' onClick={() => {props.onRemove(props.id)}}>X</button>}
      </div>
    )});

interface ISortableListProps {
    list:Question[],
    disabledList?: string[],
    onRemove: (result:Question[], id:number|undefined) => void
}

interface ISortableItemProps {
    question:Question
    showRemove: boolean,
    id: number,
    onRemove: (id:number) => void
}

export interface ArrayMoveProps {
  newIndex: number;
  oldIndex: number;
}

  export { SortableList }