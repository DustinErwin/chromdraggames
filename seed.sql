-- Drops the animals_db if it exists currently --
DROP DATABASE IF EXISTS cdgDB;
-- Creates the "animals_db" database --
CREATE DATABASE cdgDB;

-- Makes it so all of the following code will affect animals_db --
USE cdgDB;

-- Creates the table "people" within animals_db --
CREATE TABLE cards (
  -- Makes a string column called "name" which cannot contain null --
  img VARCHAR(300) NOT NULL,
  -- Makes a boolean column called "has_pet" which cannot contain null --
  alt VARCHAR(300) NOT NULL,
  -- Makes a sting column called "pet_name" --
  content VARCHAR(300) NOT NULL,
  -- Makes an numeric column called "pet_age" --
  title VARCHAR(40) NOT NULL
);

-- Creates new rows containing data in all named columns --
INSERT INTO cards (img, alt, title, content)
VALUES ("./images/rolePlaying/pathFinder.jpg", "Pathfinder", "Role Playing Games", "Dungeon and Dragons, Pathfinder, and Aliens are only a few of the genre spanning role-playing games sold in the store and played in the community.");

INSERT INTO cards (img, alt, title, content)
VALUES ("./images/magicTheGathering/Friday_Night_Magic.JPG", "Magic: The Gathering", "Magic: The Gathering", "We have a very active community with events and game nights throughout the week. Friday Night Magic happens every week starting at 6pm");

INSERT INTO cards (img, alt, title, content)
VALUES ("./images/tableTop/Sigmar_Sauron.jpg", "Miniature Gaming", "Tabletop Gaming", "Come and join us for Warhammer 40k, Age of Sigmar, or Bolt Action. Organized play through the week and plenty of tables for pick up games anytime.");

INSERT INTO cards (img, alt, title, content)
VALUES ("./images/boardGames/catan.jpg", "Catan", "Board Games", "Our shelves are bursting with stock of the most popular game titles. Axis and Allies, Settlers of Catan, or Gloomhaven we have them all. Stop in today and pick the next hit for game night!");

INSERT INTO cards (img, alt, title, content)
VALUES ("./images/events/WW2_War_Game.jpg", "Events", "Events", "We always have events going on whether ongoing events like Friday Night Magic or Xwing on Wednsday nights, or our larger tournament style events we have scheduled. All can be seen on our Facebook page join us and check it out!");


