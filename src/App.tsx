import { MenuItem } from "./components/MenuItem";
import { Section } from "./components/Section";

function App() {
  return (
    <div className="flex flex-col gap-8 p-6">
      <div className="flex gap-1 flex-col justify-center align-middle w-full text-9xl font-[Monoton]">
        <span className="w-full flex justify-center text-center">JM</span>
        <span className="w-full border-b-4 border-b-black" />
        <span className="w-full border-b-4 border-b-black" />
        <span className="w-full border-b-4 border-b-black" />
      </div>

      <div className="flex flex-col gap-8 items-center">
        <Section name="Strong and Boozy">
          <MenuItem
            name="Butter Not"
            description="Brown Butter Rum, Demerara, House Bitters, Angostura. Served with a large rock in a double old fashioned."
          />
          <MenuItem
            name="Cocoroni"
            description="Coconut Fat Wash Rum, Sherry, Vermouth, Campari. Served with a large rock."
          />
          <MenuItem
            name="Corn 'n' Oil"
            description="Classic 1700s Barbadian cocktail that is a riff on an old fashioned. Rum, Falernum, Ango."
          />
        </Section>

        <Section name="Clarity">
          <MenuItem
            name="Milk and Tea"
            description="A riff on Audrey Sonder's Earl Grey MarTEAni but clarified making the drink smoother. Tea, Gin, Viscous, Clear, Lemon, Honey. Served over a large ice cube."
          />
        </Section>

        <Section name="Tiki">
          <MenuItem
            name="PKNY"
            description="Recreated from the tropical standard book and a signature cocktail of the Sunken Harbor Club in New York. This is a better pain killer. Coconut, Pineapple, Lime, Nutmeg."
          />
          <MenuItem
            name="Dr. Barca's Fluffy Banana"
            description="Recreated from Smuggler's Cove. Banana, Coconut, Cachaca, Lemon, Angostura."
          />
          <MenuItem
            name="Three Dots and a Dash"
            description="A classic cocktail from Donn Beach codes as the V for victory sent out after World War II. Orange, Falernum, Allspice, Honey, Lime, Agricole, Angostura."
          />
          <MenuItem
            name="Mai Tai"
            description="It's not Your Tai... It's Mai Tai. A classic Trader Vic's cocktail that is like a rum + almond margarita. Orgeat, Lime, Rum, Demerara."
          />
        </Section>

        <Section name="Classics">
          <MenuItem
            name="Paloma"
            description="Tequila, grapefruit, lime and agave. Refreshing and a marriage of grapefruit and agave. I recommend you get this a little spicy."
          />
          <MenuItem
            name="Margarita"
            description="Tequila, lime, agave, orange... I add some spice and some mango salt around the rim."
          />
          <MenuItem
            name="Old Fashioned"
            description="Whiskey, Sugar, Bitters. Simple to make, easy to mess up. Served over a big ol' rock of course..."
          />
          <MenuItem
            name="Last Word"
            description="Gin, Chartreuse, Luxardo cherry, Lime. It is a classic and you may not see this cocktail on enough menus but it is a cocktail that gets riffed on often."
          />
        </Section>

        <Section name="Frozen">
          <MenuItem
            name="Coquito"
            description="Puerto Rican Holiday drink that is very much like a rum coconut egg nog. Coconut, Cinnamon, Rum."
          />
        </Section>
      </div>
    </div>
  );
}

export default App;
