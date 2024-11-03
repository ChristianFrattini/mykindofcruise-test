README FILE

The projects consists of mainly 3 components:
-NavBar
-A Cruises component
-A Adventures component

NAVBAR
navbar was build by initially setting a blue background colour. the logo placed on the lhs is also a link with an hrref property of / which redirects the user to the homepage. On the rhs of the navbar a login and signup buttons have been implemented. They both have a smooth transition to a lighter colour when the user hovers over them.

Further links could be added for better navigation and allow the user to reach more information

CRUISES COMPONENT
this component is rendered on index page (homepage). its function is to fetch the data from the api and through mapping, send it to a CruiseCard component. The items rendered are limited to a number of 5 (slice function) to prevent a confusing homepage

CRUISE CARD COMPPONENT
the cruise card component expects an item that corresponds to one cruise trip. inside each card, it is displayed the correspondig image, name, ship name, departing port and price(both full price and 6 months instalments). Furthemore, each card should render the logo of each cruise line, however for an unknown reason this does not happen. each card smoothly scales to 105 when the user hovers over it
finally a "add trip" button is rendered. when the user clicks on it a toast (react-hot-toast) is triggered acknowledging the user the trip was added to a cart. the button includes a left arrow that smoothly transition to the right when the user hovers over the button.

ADVENTURES COMPONENT
this compoent has similar functionalities to the previous CRUISES component

ADVENTURES
in this component, to render the cards the shadcnui components library has been used.

---

The project has been built using NEXTJS and includes type safety. Furthermore, mobile responsiveness has been implemented.

Outfit font is applied though the entire project

external libraries used: SHADCNUI, react-hot-toast
