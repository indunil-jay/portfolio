import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const GridAnimation = () => {
    const rows = 9;
    const cols = 16;
    const gridSize = rows * cols;

    // Define the grid indices we want to animate
    const targetCells = [
        45, 61, 60, 75, 76, 77, 90, 91, 92, 93, 105, 106, 107, 108, 109,
    ];

    // Indices of cells where border should be removed
    const removeBordersCells = [
        24, 25, 26, 27, 28, 40, 41, 42, 43, 56, 57, 58, 72, 73, 88, 120, 121,
        122, 123, 124, 136, 137, 138,
    ];

    const [currentIndices, setCurrentIndices] = useState<number[]>([]); // Tracks the filling cells
    const [directions, setDirections] = useState<string[]>([]); // Store pre-calculated random directions

    // Get random direction for each cell
    const getRandomDirection = () => {
        const directions = ["top", "bottom", "left", "right"];
        return directions[Math.floor(Math.random() * directions.length)];
    };

    // Memoize the directions
    useEffect(() => {
        const initialDirections = Array.from({ length: gridSize }, () =>
            getRandomDirection()
        );
        setDirections(initialDirections); // Set directions once when component mounts
    }, [gridSize]);

    // Start animation process
    useEffect(() => {
        const fillGrid = () => {
            let filledCells = 0;
            const fillNextCell = () => {
                if (filledCells >= targetCells.length) {
                    return; // Stop after filling all target cells
                }

                // Pick a random cell from the targetCells array
                const randomIndex = targetCells[filledCells];
                setCurrentIndices((prev) => [...prev, randomIndex]);
                filledCells++;

                // Call the next cell after a delay
                setTimeout(fillNextCell, 1000); // 1-second delay between filling cells
            };

            fillNextCell(); // Start filling cells
        };

        fillGrid();

        // Reset and restart the animation
        const interval = setInterval(() => {
            setCurrentIndices([]); // Reset grid
            fillGrid(); // Start a new animation
        }, 1000 * targetCells.length + 1000); // Wait for all cells to fill before restarting
        // Cleanup the interval on unmount
        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="space-y-20">
            <div className="min-h-screen grid grid-cols-16 grid-rows-9 w-full">
                {Array.from({ length: gridSize }, (_, i) => {
                    const isTarget = currentIndices.includes(i); // Check if the cell should animate
                    const direction = directions[i]; // Use pre-calculated direction

                    // Check if the cell should have no border (remove border for the specific cells)
                    const hasBorder =
                        !removeBordersCells.includes(i) && i % cols >= 8; // Remove border from the specific cells and for columns 1-8

                    return (
                        <motion.div
                            key={i}
                            className={`${
                                hasBorder ? "border" : ""
                            } overflow-hidden flex items-center justify-center`}
                            style={{
                                position: "relative",
                                height: "100%",
                                width: "100%",
                            }}
                        >
                            {isTarget && (
                                <motion.div
                                    initial={{
                                        width:
                                            direction === "left" ? 0 : "100%",
                                        height:
                                            direction === "top" ? 0 : "100%",
                                    }}
                                    animate={{
                                        width:
                                            direction === "right" ? 0 : "100%",
                                        height:
                                            direction === "bottom" ? 0 : "100%",
                                    }}
                                    transition={{
                                        duration: 2,
                                        ease: "linear",
                                    }}
                                    style={{
                                        backgroundColor: "#33FF57",
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        width: "100%",
                                        height: "100%",
                                        transformOrigin:
                                            direction === "left"
                                                ? "left"
                                                : direction === "right"
                                                ? "right"
                                                : direction === "top"
                                                ? "top"
                                                : "bottom",
                                    }}
                                />
                            )}
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};
