import React, { useRef, useEffect, useState } from 'react'
import Trash from '../icons/Trash'
import { setNewOffset, autoGrow, setZIndex } from '../utils'

const NoteCard = ({ note, onDelete, onUpdate }) => {
    const body = JSON.parse(note.body)
    const [position, setPosition] = useState(JSON.parse(note.position))
    const [colors, setColors] = useState(JSON.parse(note.colors))
    const [size, setSize] = useState({ width: 400, height: 'auto' })
    const [title, setTitle] = useState(note.title || "Untitled")
    const [isEditingTitle, setIsEditingTitle] = useState(false)
    const [showColorPicker, setShowColorPicker] = useState(false)

    let mouseStartPos = { x: 0, y: 0 }
    const cardRef = useRef(null)
    const textAreaRef = useRef(null)

    useEffect(() => {
        autoGrow(textAreaRef)
    }, [])

    const mouseDown = (e) => {
        if (e.target.classList.contains('resize-handle')) return
        mouseStartPos.x = e.clientX 
        mouseStartPos.y = e.clientY

        document.addEventListener('mousemove', mouseMove)
        document.addEventListener('mouseup', mouseUp)

        setZIndex(cardRef.current)
    }

    const mouseMove = (e) => {
        const mouseMoveDir = {
            x: mouseStartPos.x - e.clientX,
            y: mouseStartPos.y - e.clientY,
        }
        
        mouseStartPos.x = e.clientX
        mouseStartPos.y = e.clientY

        const newPosition = setNewOffset(cardRef.current, mouseMoveDir)
        setPosition(newPosition)
        onUpdate(note.$id, { position: JSON.stringify(newPosition) })
    }

    const mouseUp = () => {
        document.removeEventListener("mousemove", mouseMove)
        document.removeEventListener("mouseup", mouseUp)
    }

    const handleResize = (e) => {
        const newWidth = Math.max(200, e.clientX - cardRef.current.offsetLeft)
        setSize({...size, width: newWidth})
    }

    const handleDelete = (e) => {
        e.stopPropagation()
        onDelete(note.$id)
    }

    const handleColorChange = (part, color) => {
        const newColors = {...colors, [part]: color}
        setColors(newColors)
        onUpdate(note.$id, { colors: JSON.stringify(newColors) })
    }

    const handleTextChange = (e) => {
        autoGrow(textAreaRef)
        onUpdate(note.$id, { body: JSON.stringify(e.target.value) })
    }

    const handleTitleBlur = () => {
        setIsEditingTitle(false)
        onUpdate(note.$id, { title })
    }

    return (
        <div 
            ref={cardRef}
            className='card' 
            style={{
                backgroundColor: colors.colorBody,
                left: `${position.x}px`,
                top: `${position.y}px`,
                width: `${size.width}px`
            }}
        >
            <div
                onMouseDown={mouseDown}
                className="card-header" 
                style={{ backgroundColor: colors.colorHeader }}
            >
                {isEditingTitle ? (
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        onBlur={handleTitleBlur}
                        onKeyPress={(e) => e.key === 'Enter' && handleTitleBlur()}
                        className="note-title-input"
                        style={{ color: colors.colorText }}
                        autoFocus
                    />
                ) : (
                    <div 
                        className="note-title" 
                        onDoubleClick={() => setIsEditingTitle(true)}
                        style={{ color: colors.colorText }}
                    >
                        {title}
                    </div>
                )}
                
                <div style={{ display: 'flex', gap: '10px' }}>
                    <span 
                        className="palette-icon"
                        onClick={(e) => {
                            e.stopPropagation()
                            setShowColorPicker(!showColorPicker)
                        }}
                    >
                        🎨
                    </span>
                    <Trash onClick={handleDelete} className="trash-icon" />
                </div>
                
                {showColorPicker && (
                    <div className="color-picker" style={{ color: colors.colorText }}>
                        <label>
                            Header:
                            <input 
                                type="color" 
                                value={colors.colorHeader} 
                                onChange={(e) => handleColorChange('colorHeader', e.target.value)} 
                            />
                        </label>
                        <label>
                            Body:
                            <input 
                                type="color" 
                                value={colors.colorBody} 
                                onChange={(e) => handleColorChange('colorBody', e.target.value)} 
                            />
                        </label>
                        <label>
                            Text:
                            <input 
                                type="color" 
                                value={colors.colorText} 
                                onChange={(e) => handleColorChange('colorText', e.target.value)} 
                            />
                        </label>
                    </div>
                )}
            </div>
            
            <div className="card-body">
                <textarea 
                    name="" 
                    id="" 
                    defaultValue={body}
                    onChange={handleTextChange}
                    onInput={() => autoGrow(textAreaRef)}
                    onFocus={() => setZIndex(cardRef.current)}
                    ref={textAreaRef}
                    style={{ color: colors.colorText }}
                />
            </div>
            
            <div 
                className="resize-handle" 
                onMouseDown={(e) => {
                    e.preventDefault()
                    document.addEventListener('mousemove', handleResize)
                    document.addEventListener('mouseup', () => {
                        document.removeEventListener('mousemove', handleResize)
                    })
                }}
            />
        </div>
    )
}

export default NoteCard