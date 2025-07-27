import React, { useRef, useEffect, useState } from 'react'
import Trash from '../icons/Trash'
import { setNewOffset, autoGrow, setZIndex } from '../utils'

const NoteCard = ({ note, onDelete, onUpdate }) => {
    const body = JSON.parse(note.body)
    const [position, setPosition] = useState(JSON.parse(note.position))
    const [colors, setColors] = useState(JSON.parse(note.colors))
    const [size, setSize] = useState({ width: Math.min(400, window.innerWidth * 0.9), height: 'auto' })
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
        mouseStartPos.x = e.clientX || e.touches[0].clientX
        mouseStartPos.y = e.clientY || e.touches[0].clientY

        document.addEventListener('mousemove', mouseMove)
        document.addEventListener('mouseup', mouseUp)
        document.addEventListener('touchmove', mouseMove)
        document.addEventListener('touchend', mouseUp)

        setZIndex(cardRef.current)
    }

    const mouseMove = (e) => {
        const clientX = e.clientX || e.touches[0].clientX
        const clientY = e.clientY || e.touches[0].clientY
        
        const mouseMoveDir = {
            x: mouseStartPos.x - clientX,
            y: mouseStartPos.y - clientY,
        }
        
        mouseStartPos.x = clientX
        mouseStartPos.y = clientY

        const newPosition = setNewOffset(cardRef.current, mouseMoveDir)
        setPosition(newPosition)
        onUpdate(note.$id, { position: JSON.stringify(newPosition) })
    }

    const mouseUp = () => {
        document.removeEventListener("mousemove", mouseMove)
        document.removeEventListener("mouseup", mouseUp)
        document.removeEventListener("touchmove", mouseMove)
        document.removeEventListener("touchend", mouseUp)
    }

    const handleResize = (e) => {
        const clientX = e.clientX || e.touches[0].clientX
        const newWidth = Math.max(200, Math.min(clientX - cardRef.current.offsetLeft, window.innerWidth * 0.9))
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
                width: `${size.width}px`,
                minHeight: 'clamp(150px, 30vh, 250px)'
            }}
            onTouchStart={mouseDown}
        >
            <div
                onMouseDown={mouseDown}
                onTouchStart={mouseDown}
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
                        onTouchEnd={() => setIsEditingTitle(true)}
                        style={{ color: colors.colorText }}
                    >
                        {title}
                    </div>
                )}
                
                <div style={{ display: 'flex', gap: 'clamp(8px, 2vmin, 12px)' }}>
                    <span 
                        className="palette-icon"
                        onClick={(e) => {
                            e.stopPropagation()
                            setShowColorPicker(!showColorPicker)
                        }}
                        onTouchEnd={(e) => {
                            e.stopPropagation()
                            setShowColorPicker(!showColorPicker)
                        }}
                    >
                        🎨
                    </span>
                    <Trash 
                        onClick={handleDelete} 
                        onTouchEnd={handleDelete}
                        className="trash-icon" 
                    />
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
                    style={{ 
                        color: colors.colorText,
                        fontSize: 'clamp(14px, 4vmin, 18px)'
                    }}
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
                onTouchStart={(e) => {
                    e.preventDefault()
                    document.addEventListener('touchmove', handleResize)
                    document.addEventListener('touchend', () => {
                        document.removeEventListener('touchmove', handleResize)
                    })
                }}
            />
        </div>
    )
}

export default NoteCard