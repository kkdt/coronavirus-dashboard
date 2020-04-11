import React, {useState, useEffect} from 'react';
import {Collapsible} from 'pivotal-ui/react/collapsible';
import {Toggle} from 'pivotal-ui/react/toggle';
import {DefaultButton, PrimaryButton, DangerButton, BrandButton} from 'pivotal-ui/react/buttons';

function CollapsibleExample() {
    const [expanded, setExpanded] = useState(false);

    return (
        <div>
        <Toggle checked={expanded} onChange={evt => setExpanded(p => !p)}/>
        <Collapsible expanded={expanded}>
            <div className="mtl"><DefaultButton>Button 1</DefaultButton></div>
            <div className="mtl"><DefaultButton>Button 2</DefaultButton></div>
        </Collapsible>
        </div>
    );
}

export default CollapsibleExample;